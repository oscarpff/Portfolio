import { useState, useCallback } from "react";
import { X, ZoomIn, ZoomOut, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
  title: string;
  downloadName?: string;
}

const PDFModal = ({ isOpen, onClose, pdfFile, title, downloadName }: PDFModalProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    console.error("PDF load error:", err);
    setError("Failed to load PDF. Please try downloading instead.");
    setLoading(false);
  }, []);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  const handlePrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = downloadName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div 
        className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col bg-background rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-muted/50 border-b border-border">
          <h2 className="font-display text-xl font-semibold">{title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 items-center p-3 bg-muted/30 border-b border-border">
          {/* Page Navigation */}
          {numPages > 0 && (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrevPage}
                disabled={pageNumber <= 1}
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-body text-muted-foreground min-w-20 text-center">
                {pageNumber} / {numPages}
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={handleNextPage}
                disabled={pageNumber >= numPages}
                className="border-gold/30 text-gold hover:bg-gold/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}

          <div className="hidden sm:block h-6 border-r border-border mx-2"></div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
              className="border-gold/30 text-gold hover:bg-gold/10"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm font-body text-muted-foreground mx-2 min-w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={handleZoomIn}
              disabled={scale >= 2.5}
              className="border-gold/30 text-gold hover:bg-gold/10"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleResetZoom}
              className="text-gold/70 hover:text-gold hover:bg-gold/10"
            >
              Reset
            </Button>
          </div>

          <div className="hidden sm:block h-6 border-r border-border mx-2"></div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleDownload}
            className="border-gold/30 text-gold hover:bg-gold/10 ml-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-muted/30 flex justify-center p-4">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-muted-foreground font-body">Loading PDF...</div>
            </div>
          )}
          
          {error && (
            <div className="flex flex-col items-center justify-center h-full gap-4">
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

          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className={error ? "hidden" : ""}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-lg"
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
