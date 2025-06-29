"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn, signUp } from "@/lib/auth-client";
import Image from "next/image";

export function AuthClient() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGithub = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "/dashboard"
    });
  }

  const handleGoogle = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard"
    });
  }

  const login = async () => {
    await signIn.email(
      { email, password, callbackURL: "/dashboard" },
      {
        onRequest: () => setLoading(true),
        onResponse: () => setLoading(false),
        onError: (ctx) => { setError(ctx.error?.message || "Login failed"); },
      }
    );
  };

  const register = async () => {
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    await signUp.email({
      email,
      password,
      name: `${firstName} ${lastName}`,
      image: image ? await convertImageToBase64(image) : "",
      callbackURL: "/dashboard",
      fetchOptions: {
        onResponse: () => setLoading(false),
        onRequest: () => setLoading(true),
        onError: (ctx) => { setError(ctx.error?.message || "Registration failed"); },
      },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background font-[Gotham]">
      <Card className="w-full max-w-md shadow-none border-0 bg-white">
        <CardHeader className="flex flex-col items-center gap-2">
          <Image src="/logo2.svg" alt="Ripple logo" width={48} height={48} className="mb-2" />
          <CardTitle className="text-2xl font-bold text-center">{mode === "login" ? "Sign in to your account" : "Create your account"}</CardTitle>
          <CardDescription className="text-center text-base text-muted-foreground">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{' '}
                <button className="text-[#FA5539] font-medium hover:underline" onClick={() => { setMode("register"); setError(null); }}>Sign up</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-[#FA5539] font-medium hover:underline" onClick={() => { setMode("login"); setError(null); }}>Sign in</button>
              </>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-2 mb-2">
            <Button onClick={handleGithub} variant="outline" className="flex-1 border border-gray-200" style={{ color: '#24292f' }}>
              <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              Login with GitHub
            </Button>
            <Button onClick={handleGoogle} variant="outline" className="flex-1 border border-gray-200" style={{ color: '#EA4335' }}>
              <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24"><path d="M21.805 10.023h-9.765v3.954h5.617c-.242 1.236-1.457 3.627-5.617 3.627-3.377 0-6.13-2.797-6.13-6.25s2.753-6.25 6.13-6.25c1.922 0 3.217.82 3.96 1.527l2.707-2.633c-1.71-1.59-3.922-2.57-6.667-2.57-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 9.168-3.867 9.168-9.344 0-.625-.07-1.094-.156-1.547z"/></svg>
              Login with Google
            </Button>
          </div>
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="mx-2 text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          {error && (
            <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-2 text-sm text-center">
              {error}
            </div>
          )}
          {mode === "login" ? (
            <form className="flex flex-col gap-4" onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              login();
            }}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(null); }}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FA5539] hover:bg-[#e04a2e] text-white font-semibold"
                disabled={loading}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <p>Sign in</p>}
              </Button>
            </form>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              register();
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    required
                    onChange={(e) => { setFirstName(e.target.value); setError(null); }}
                    value={firstName}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    required
                    onChange={(e) => { setLastName(e.target.value); setError(null); }}
                    value={lastName}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  value={email}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(null); }}
                  autoComplete="new-password"
                  placeholder="Password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => { setPasswordConfirmation(e.target.value); setError(null); }}
                  autoComplete="new-password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Profile Image (optional)</Label>
                <div className="flex items-end gap-4">
                  {imagePreview && (
                    <div className="relative w-16 h-16 rounded-sm overflow-hidden">
                      <Image
                        src={imagePreview}
                        alt="Profile preview"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 w-full">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FA5539] hover:bg-[#e04a2e] text-white font-semibold"
                disabled={loading}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : "Create an account"}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-center w-full border-t py-4 gap-2">
            {mode === "login" && (
              <span className="text-sm text-gray-500">
                Forgot your password? <span className="text-[#FA5539] font-medium cursor-pointer hover:underline">Reset password</span>
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );

  async function convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
} 