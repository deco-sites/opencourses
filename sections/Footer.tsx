import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function FooterWithImage({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-bold mb-2">OpenCourses</h3>
            <p class="text-gray-400">© 2024 OpenCourses. All rights reserved.</p>
          </div>
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="/privacy" class="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="/terms" class="hover:text-gray-300 transition">Terms of Service</a>
            <a href="/contact" class="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
      </footer>
      <FooterWithImage />
    </div>
  );
}
