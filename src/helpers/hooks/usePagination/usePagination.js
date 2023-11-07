import {useMemo} from "react";

export default function usePagination({totalCount, pageSize, siblingCount = 1, currentPage}) {
    const DOTS = "...";

    const range = (start, end) => {
        let length = end - start + 1;

        return Array.from({length}, (_, idx) => idx + start);
    };

    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize),
            totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1),
            rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount),
            shouldShowLeftDots = leftSiblingIndex > 2,
            shouldShowRightDots = rightSiblingIndex < totalPageCount - 2,
            firstPageIndex = 1,
            lastPageIndex = totalPageCount;

        if (siblingCount < 0) {
            const middleRange = range(1, 3);
            if (currentPage >= middleRange[middleRange.length - 1]) {
                if (currentPage === lastPageIndex) {
                    return [currentPage - 2, currentPage - 1, currentPage];
                }
                return [currentPage - 1, currentPage, currentPage + 1];
            }
            return middleRange;
        }

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return {
        paginationRange,
        DOTS
    };
};