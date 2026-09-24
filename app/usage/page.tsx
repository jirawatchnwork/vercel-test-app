"use client";

import { KbsWidget } from "@jirawatchnwork/kbs-widget-react";

export default function Usage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          หน้าแรก
        </h1>
        <p className="mt-4 max-w-md text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          มีคำถามเกี่ยวกับการใช้งาน? คุยกับผู้ช่วยของเราได้ที่มุมขวาล่าง
        </p>
      </main>
      <KbsWidget
        scope="support"
        apiBase={process.env.NEXT_PUBLIC_KBS_API_BASE ?? "https://chat.ideacarb.com"}
        authToken={process.env.NEXT_PUBLIC_KBS_WIDGET_TOKEN}
      />
    </div>
  );
}
