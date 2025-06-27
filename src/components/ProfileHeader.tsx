import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex items-start gap-6">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop" />
          <AvatarFallback className="text-xl font-semibold bg-primary-50 text-primary-600">
            СС
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              ООО "СтройСтандарт"
            </h1>
            <Badge
              variant="secondary"
              className="bg-primary-50 text-primary-600 border-primary-100"
            >
              Застройщик
            </Badge>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            ИНН: 7728123456 • ОГРН: 1027739123456 • КПП: 772801001 • ОКВЭД:
            41.20
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={16} />
              <span>г. Москва, ул. Строительная, д. 15</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={16} />
              <span>Зарегистрировано: 15.03.2010</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <Icon name="Building" size={16} />
              <span>Р/с: 40702810123456789012</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Landmark" size={16} />
              <span>БИК: 044525225</span>
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
