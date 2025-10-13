"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
    if (res.ok) {
      router.replace("/admin")
    } else {
      setError("Identifiants invalides")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-sm">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Connexion Admin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Nom d'utilisateur</label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Mot de passe</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <div className="text-sm text-destructive">{error}</div>}
            <Button type="submit" className="w-full">Se connecter</Button>
          </CardContent>
        </Card>
      </form>
    </main>
  )
}




