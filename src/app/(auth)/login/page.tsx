"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PasswordInput } from "@/components"
import { formatPhone, normalizePhone } from "@/lib/utils/phone"

const LoginPage = () => {
  const [phone, setPhone] = useState("+998 ")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    const normalizedPhone = normalizePhone(phone)

    setLoading(false)
  }

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="phone" className="p-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+998 91 234 56 78"
                value={phone}
                maxLength={17}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="p-2">
                Password
              </Label>
              <PasswordInput
                id="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
