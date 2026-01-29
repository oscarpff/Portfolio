import { useState } from "react";
import { X, ZoomIn, ZoomOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfFile: string;
  title: string;
  downloadName?: string;
}

const PDFModal = ({ isOpen, onClose, pdfFile, title, downloadName }: PDFModalProps) => {
  const [scale, setScale] = useState<number>(1);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col bg-background rounded-lg overflow-hidden">
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

          <Button
            size="sm"
            variant="outline"
            onClick={handleDownload}
            className="border-gold/30 text-gold hover:bg-gold/10 ml-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar
          </Button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-muted/30">
          <iframe
            src={`${pdfFile}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
