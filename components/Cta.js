import { Button } from "./ui/button";
import Link from 'next/link'

export default function Cta() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-secondary/40">
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">準備好翻轉你的創意了嗎? <span className="inline-block">讓我來幫助你吧!</span>
          </h2>
          <Link href='/contact'>
            <Button>聯絡我</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}