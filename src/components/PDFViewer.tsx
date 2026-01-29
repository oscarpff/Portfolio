import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfFile: string;
  title: string;
  description?: string;
  downloadName?: string;
}

const PDFViewer = ({ pdfFile, title, description, downloadName }: PDFViewerProps) => {
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
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground text-sm font-body mb-4">{description}</p>}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 items-center p-4 bg-muted/50 rounded-lg border border-border">
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

        {/* Zoom */}
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

        {/* Download */}
        <Button
          size="sm"
          variant="outline"
          onClick={handleDownload}
          className="border-gold/30 text-gold hover:bg-gold/10 ml-auto"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="border border-border rounded-lg overflow-hidden bg-muted/30 flex justify-center p-4" style={{ minHeight: "600px" }}>
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

      {/* Alternative download link */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground mb-2">
          If the viewer doesn't load correctly, you can download the PDF directly
        </p>
        <Button asChild variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
          <a href={pdfFile} download={downloadName || "document.pdf"}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
