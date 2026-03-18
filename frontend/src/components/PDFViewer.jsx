import { Document, Page } from "react-pdf";
import { useState } from "react";
import { FileText, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

function PDFViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.6));
  };

  if (!file) {
    return (
      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4 max-w-md px-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
            <FileText className="w-10 h-10 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-700">No PDF Selected</h3>
          <p className="text-gray-500">
            Upload a PDF document to view it here and start asking questions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-100">
      
      {/* PDF Controls */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        
        {/* Page Navigation */}
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="px-4 py-2 bg-gray-100 rounded-lg">
            <span className="text-sm font-semibold text-gray-700">
              Page {pageNumber} of {numPages || "-"}
            </span>
          </div>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.6}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomOut className="w-5 h-5 text-gray-700" />
          </button>

          <div className="px-4 py-2 bg-gray-100 rounded-lg min-w-[80px] text-center">
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(scale * 100)}%
            </span>
          </div>

          <button
            onClick={zoomIn}
            disabled={scale >= 2.0}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* PDF Document */}
      <div className="flex-1 overflow-y-auto p-6 flex justify-center">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <Document file={file} onLoadSuccess={onLoadSuccess}>
            <Page 
              pageNumber={pageNumber} 
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;