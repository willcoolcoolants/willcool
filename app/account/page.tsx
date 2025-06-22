"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building, Mail, Phone, LogOut, FileText, ChevronRight } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";
import Navigation from "@/components/navigation";
import Link from "next/link";

interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  phone: string;
  industry: string;
  created_at: string;
}

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = getSupabaseClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/login");
        return;
      }

      setUser(user);

      // Fetch user profile
      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileData) {
        setProfile(profileData as unknown as UserProfile);
      }

      setLoading(false);
    };

    getUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white animate-pulse"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          </div>
          <p className="text-slate-600">Loading your account...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                My Account
              </h1>
              <p className="text-slate-600">
                Welcome back, {profile?.first_name || user?.email}!
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
          </div>

          {/* Profile Card */}
          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Full Name</p>
                      <p className="font-medium text-slate-800">
                        {profile?.first_name} {profile?.last_name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium text-slate-800">
                        {profile?.email || user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Company</p>
                      <p className="font-medium text-slate-800">
                        {profile?.company || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium text-slate-800">
                        {profile?.phone || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {profile?.industry && (
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">Industry</p>
                  <p className="font-medium text-slate-800 capitalize">
                    {profile.industry}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Account Resources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-slate-200">
                <Link
                  href="/products"
                  className="flex justify-between items-center py-4 hover:bg-slate-50 rounded-lg px-2"
                >
                  <span className="font-medium text-slate-800">Browse Products</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
                <Link
                  href="/contact"
                  className="flex justify-between items-center py-4 hover:bg-slate-50 rounded-lg px-2"
                >
                  <span className="font-medium text-slate-800">Contact Support</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex justify-between items-center py-4 hover:bg-red-50 rounded-lg px-2 text-red-600"
                >
                  <span className="font-medium">Sign Out</span>
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 