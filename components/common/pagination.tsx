// components/blogs/Pagination.tsx

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="rounded-lg border border-border px-4 py-2 disabled:opacity-50"
            >
                Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`h-10 w-10 rounded-lg font-medium transition-all ${currentPage === page
                                ? "bg-primary text-white"
                                : "border border-border bg-surface hover:bg-accent hover:text-primary-dark"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="rounded-lg border border-border px-4 py-2 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}