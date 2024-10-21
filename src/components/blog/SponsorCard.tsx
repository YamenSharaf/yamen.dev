import { HeartIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function SponsorCard() {
  return (
    <div className="my-3 flex flex-col content-center items-center rounded-md border border-solid border-pink-500 p-5">
      <p className="mb-3">
        If you find this article helpful, consider supporting me
      </p>
      <a
        href="https://github.com/sponsors/YamenSharaf?frequency=one-time"
        target="_blank"
        rel="noopener"
      >
        <Button variant="outline" className="group/donate">
          <HeartIcon className="mr-2 h-4 w-4 text-pink-500 group-hover/donate:animate-ping" />
          Buy me a coffee
        </Button>
      </a>
    </div>
  );
}
