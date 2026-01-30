import { useState, useCallback, useRef, useEffect } from "react";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Move,
  Download,
  Crosshair
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface FlowchartViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
  title: string;
  downloadName?: string;
}

const FlowchartViewer = ({ isOpen, onClose, pdfFile, title, downloadName }: FlowchartViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Listen for fullscreen changes (e.g., user presses Escape)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
    
    // Center to top-middle after a brief delay to ensure content is rendered
    setTimeout(() => {
      if (transformRef.current) {
        // Reset and then pan to show top of document
        transformRef.current.resetTransform();
      }
    }, 100);
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    console.error("PDF load error:", err);
    setError("Failed to load flowchart. Please try downloading instead.");
    setLoading(false);
  }, []);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = downloadName || 'flowchart.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const viewerClasses = "w-full h-full flex flex-col bg-background";

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div 
        className={viewerClasses + " relative max-w-6xl max-h-[90vh] rounded-lg overflow-hidden " + (isFullscreen ? "max-w-none max-h-none rounded-none" : "")}
        onClick={(e) => e.stopPropagation()}
        style={isFullscreen ? { width: '100vw', height: '100vh' } : { width: '95vw', height: '90vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 bg-muted/50 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-lg font-semibold">{title}</h2>
            <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
              Pan & Zoom enabled
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-muted-foreground hover:text-foreground"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-wrap gap-2 items-center justify-between p-3 bg-muted/30 border-b border-border shrink-0">
          <div className="flex items-center gap-1">
            {/* Zoom Controls */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => transformRef.current?.zoomOut()}
              className="border-gold/30 text-gold hover:bg-gold/10"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => transformRef.current?.zoomIn()}
              className="border-gold/30 text-gold hover:bg-gold/10"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>

            <div className="h-6 border-r border-border mx-2"></div>

            {/* Navigation Controls */}
            <Button
              size="sm"
              variant="outline"
              onClick={() => transformRef.current?.resetTransform()}
              className="border-gold/30 text-gold hover:bg-gold/10"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => transformRef.current?.centerView()}
              className="border-gold/30 text-gold hover:bg-gold/10"
              title="Center View"
            >
              <Crosshair className="w-4 h-4" />
            </Button>

            {/* Page Navigation for multi-page PDFs */}
            {numPages > 1 && (
              <>
                <div className="h-6 border-r border-border mx-2"></div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage <= 1}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    ←
                  </Button>
                  <span className="text-sm text-muted-foreground min-w-16 text-center">
                    {currentPage} / {numPages}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.min(numPages, p + 1))}
                    disabled={currentPage >= numPages}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    →
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
              <Move className="w-3 h-3" />
              Drag to pan
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownload}
              className="border-gold/30 text-gold hover:bg-gold/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 overflow-hidden bg-muted/20 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-muted-foreground font-body">Loading flowchart...</div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <p className="text-destructive font-body">{error}</p>
              <Button
                variant="outline"
                onClick={handleDownload}
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Instead
              </Button>
            </div>
          )}

          <TransformWrapper
            ref={transformRef}
            initialScale={1}
            minScale={0.1}
            maxScale={5}
            centerOnInit={true}
            limitToBounds={false}
            wheel={{ step: 0.1 }}
            panning={{ velocityDisabled: false }}
            doubleClick={{ mode: "reset" }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  minWidth: "100%",
                  minHeight: "100%"
                }}
              >
                <Document
                  file={pdfFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={null}
                  className={error ? "hidden" : ""}
                >
                  <Page
                    pageNumber={currentPage}
                    scale={1.5}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-2xl"
                  />
                </Document>
              </TransformComponent>
            )}
          </TransformWrapper>

          {/* Zoom level indicator */}
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border rounded px-3 py-1.5 text-xs text-muted-foreground font-mono">
            Scroll to zoom • Double-click to reset
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowchartViewer;
