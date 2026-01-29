import { useState } from "react";
import { ChevronUp, ChevronDown, ZoomIn, ZoomOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  pdfFile: string; // URL or file path
  title: string;
  description?: string;
  downloadName?: string;
}

const PDFViewer = ({ pdfFile, title, description, downloadName }: PDFViewerProps) => {
  const [scale, setScale] = useState<number>(1);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.8));
  };

  const handleResetZoom = () => {
    setScale(1);
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
        {/* Zoom */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleZoomOut}
            disabled={scale <= 0.8}
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
            disabled={scale >= 2}
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

      {/* PDF Embed */}
      <div className="border border-border rounded-lg overflow-hidden bg-muted/30" style={{ height: "600px" }}>
        <iframe
          src={`${pdfFile}#toolbar=1&navpanes=0&scrollbar=1&zoom=${Math.round(scale * 100)}`}
          className="w-full h-full"
          title={title}
          style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        />
      </div>

      {/* Alternative download link */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground mb-2">
          Si el visor no se carga correctamente, puedes descargar el PDF directamente
        </p>
        <Button asChild variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10">
          <a href={pdfFile} download={downloadName || "document.pdf"}>
            <Download className="w-4 h-4 mr-2" />
            Descargar PDF
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
