'use client'
import { StyleType } from "@/app/types/Style.type"
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function LoadmoreBtn({ styles, label, currentPage, activeTab }: { styles: StyleType, label: string, currentPage: number, activeTab: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const loadMore = () => {
    currentPage++;
    activeTab == '' && params.set('query', 'all')
    params.set('page', currentPage.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="text-center mt-2">
      <button className={styles.load_more_btn} onClick={loadMore}>
        Load more...
      </button>
    </div>
  )
}

export default LoadmoreBtn
