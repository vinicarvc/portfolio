'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Vinícius Carvalho
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-[#20435C] dark:text-[#F5F7FA]"
          delay={0.5}
        >
          Front-End Developer
        </TextEffect>
      </div>
    </header>
  )
}
