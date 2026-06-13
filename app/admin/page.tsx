import AdminLayout from "@/Components/Admin/AdminLayout";
import DashboardContent from "@/Components/Admin/DashboardContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - WINK",
  description: "Manage your online store, track revenue, and monitor visitor analytics.",
};

export default function AdminPage() {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  );
}
