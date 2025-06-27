import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex items-start gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
          <AvatarFallback className="text-xl font-semibold bg-primary-50 text-primary-600">
            АД
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              Алексей Дмитриев
            </h1>
            <Badge
              variant="secondary"
              className="bg-primary-50 text-primary-600 border-primary-100"
            >
              Senior Developer
            </Badge>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Разрабатываю современные веб-приложения с акцентом на
            производительность и пользовательский опыт. Специализируюсь на
            React, TypeScript и архитектуре микросервисов.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={16} />
              <span>Москва, Россия</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Mail" size={16} />
              <span>alexey@example.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Phone" size={16} />
              <span>+7 (999) 123-45-67</span>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
          <Icon name="Edit3" size={16} />
          <span>Редактировать</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
