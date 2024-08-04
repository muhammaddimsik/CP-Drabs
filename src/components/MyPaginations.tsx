import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

interface Props {
  isLoading: boolean;
  offsetMax: number | undefined;
  getDataKesehatan: (offset: number, limit: number) => Promise<void>;
}

const MyPagination: React.FC<Props> = ({ offsetMax, getDataKesehatan }) => {
  const [offset, setOffset] = useState(1);
  const limit = 5;

  const handlePrev = () => {
    if (offset > 5) {
      setOffset(offset - 5);
    }
  };

  const handleNext = () => {
    if (offset == offsetMax) {
      console.log("anda berada pada data terakhir");
    } else {
      setOffset(offset + 5);
    }
  };

  useEffect(() => {
    getDataKesehatan(offset, limit);
  }, [offset]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="outline"
            size="sm"
            disabled={offset <= 5 ? true : false}
            onClick={handlePrev}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            onClick={() => setOffset(5)}
            variant="outline"
            size="sm"
            className="border-none"
          >
            1
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button
            variant="outline"
            size="sm"
            disabled={
              offsetMax != undefined && offset >= offsetMax ? true : false
            }
            onClick={handleNext}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
