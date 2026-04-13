"use client"
import * as React from "react"
export function LayoutProvider({ children }: { children: React.ReactNode }) { return <>{children}</> }
export function useLayout() { return { layout: "default" } }
