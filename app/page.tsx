import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background gap-5">
            <Image src="/fourway.svg" alt="fourway" width="150" height="50"/>
            <h1 className="text-5xl font-bold text-white">
                Tady bude něco skvělého.
            </h1>
            <div className="flex items-center justify-center mt-3 gap-3">
                <Link href="/discord" className="bg-foreground text-background py-2 px-4 font-semibold rounded-xl hover:opacity-70">
                    Discord
                </Link>
                <Link href="/github" className="bg-foreground text-background py-2 px-4 font-semibold rounded-xl hover:opacity-70">
                    GitHub
                </Link>
            </div>
        </main>
    );
}