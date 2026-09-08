"use client";

import Link from "next/link";
import { KbsWidget } from "@jirawatchnwork/kbs-widget-react";
import { logout } from "@/app/actions/auth";

const features = [
  {
    title: "คำนวณคาร์บอนฟุตพริ้นท์",
    description: "วัดผลกระทบต่อสิ่งแวดล้อมขององค์กรคุณได้แม่นยำ ตามมาตรฐานสากล",
  },
  {
    title: "รายงานอัตโนมัติ",
    description: "สร้างรายงานพร้อมกราฟและสรุปผล ส่งต่อให้ทีมหรือผู้บริหารได้ทันที",
  },
  {
    title: "ติดตามความคืบหน้า",
    description: "ตั้งเป้าหมายลดการปล่อยคาร์บอน และติดตามผลลัพธ์แบบเรียลไทม์",
  },
];

const plans = [
  {
    name: "Starter",
    price: "ฟรี",
    description: "เริ่มต้นคำนวณคาร์บอนฟุตพริ้นท์สำหรับทีมเล็ก",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "1,990 บาท/เดือน",
    description: "รายงานเชิงลึกและการสนับสนุนสำหรับองค์กรที่กำลังเติบโต",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "ติดต่อฝ่ายขาย",
    description: "โซลูชันเฉพาะทางสำหรับองค์กรขนาดใหญ่",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-1 flex-col items-center bg-white dark:bg-black">
        <form action={logout} className="flex w-full max-w-5xl justify-end px-6 pt-6">
          <button
            type="submit"
            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            ออกจากระบบ
          </button>
        </form>

        {/* Hero */}
        <section className="flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
          <span className="rounded-full bg-black/[.06] px-4 py-1 text-sm font-medium text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300">
            ทดสอบคำถาม
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            ลดคาร์บอนฟุตพริ้นท์องค์กรของคุณ อย่างเป็นระบบ
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            เครื่องมือที่ช่วยให้ธุรกิจวัด ติดตาม และลดการปล่อยก๊าซเรือนกระจก
            พร้อมรายงานที่พร้อมใช้งานจริง
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
              href="#pricing"
            >
              เริ่มต้นใช้งานฟรี
            </a>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
              href="/usage"
            >
              วิธีใช้งาน
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
              href="/faq"
            >
              ผลทดสอบ FAQ
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="w-full max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
              >
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            แพ็กเกจที่เหมาะกับทุกขนาดธุรกิจ
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-3 rounded-2xl border p-6 ${
                  plan.highlighted
                    ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                    : "border-black/[.08] dark:border-white/[.145]"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-2xl font-semibold">{plan.price}</p>
                <p
                  className={`text-sm leading-6 ${
                    plan.highlighted
                      ? "text-zinc-200 dark:text-zinc-700"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <KbsWidget
        scope="product"
        apiBase={process.env.NEXT_PUBLIC_KBS_API_BASE ?? "https://api.example.com"}
        suggestions={["วิธีคำนวณคาร์บอนฟุตพริ้นท์", "สมัครแพ็กเกจยังไง"]}
      />
    </div>
  );
}
