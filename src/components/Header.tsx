import Link from "next/link";
import DeployToRenderButton from "@/components/DeployToRenderButton";
import { GITHUB_REPO_URL } from "@/lib/render";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-5 border-b border-[#d1d5dc] mb-8">
      <Link href="/" className="flex flex-row gap-1">
        <img src="/logo.svg" alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
        <p className="hidden sm:block text-xl font-bold text-left mt-0.5">
          <span className="text-xl font-bold text-left text-[#1e2939]">
            Bill
          </span>
          <span className="text-xl font-bold text-left text-[#6a2000]">
            Split
          </span>
        </p>
      </Link>

      <div className="flex items-center gap-2">
        <DeployToRenderButton />
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-end items-center gap-1.5 p-2 sm:px-[14px] sm:py-[7px] rounded bg-[#d04f17]"
        >
          <img
            src="/github.svg"
            alt="GitHub Logo"
            className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
          />

          <p className="hidden sm:block text-xs sm:text-sm font-medium text-white">
            Star on GitHub
          </p>
        </a>
      </div>
    </header>
  );
}
