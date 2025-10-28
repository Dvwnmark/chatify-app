import { LoaderIcon } from "lucide-react";
function PageLoader() {
    return (
        <div className="flex items-center justify-center h-screen">
            <LoaderIcon className="size-10 animate-spin"/>
            PageLoader
        </div>
    )
}

export default PageLoader
