import ProfileHeader from "@/components/ProfileHeader";
import UserDataSection from "@/components/UserDataSection";
import DocumentsSection from "@/components/DocumentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Заголовок профиля */}
          <ProfileHeader />

          {/* Управление данными пользователя */}
          <UserDataSection />

          {/* Управление документами */}
          <DocumentsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
