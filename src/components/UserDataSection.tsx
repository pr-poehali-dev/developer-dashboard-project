import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const UserDataSection = () => {
  const dataStats = [
    { label: "Активные объекты", value: 5, total: 8, color: "bg-primary" },
    {
      label: "Заключенные договоры",
      value: 142,
      total: 200,
      color: "bg-green-500",
    },
    {
      label: "Готовность проектов",
      value: 68,
      total: 100,
      color: "bg-orange-500",
      unit: "%",
    },
  ];

  const recentActivity = [
    {
      action: "Обновлена проектная декларация",
      project: "ЖК Северный",
      time: "2 часа назад",
      icon: "FileText",
    },
    {
      action: "Заключен договор ДДУ",
      project: "Квартира 145, корпус А",
      time: "4 часа назад",
      icon: "FileSignature",
    },
    {
      action: "Получено разрешение",
      project: "ЖК Восточный",
      time: "Вчера",
      icon: "Shield",
    },
  ];

  const companyData = [
    { label: "ИНН", value: "7726123456" },
    { label: "ОГРН", value: "1234567890123" },
    { label: "КПП", value: "772601001" },
    { label: "ОКВЭД", value: "41.20 - Строительство жилых и нежилых зданий" },
    { label: "Юридический адрес", value: "г. Москва, ул. Строительная, д. 15" },
    {
      label: "Банковские реквизиты",
      value: "р/с 40702810400000000001 в ПАО Сбербанк",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Статистика данных */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="BarChart3" size={20} />
            Статистика данных
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {dataStats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {stat.label}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.value}
                  {stat.unit || ""} / {stat.total}
                  {stat.unit || ""}
                </span>
              </div>
              <Progress
                value={(stat.value / stat.total) * 100}
                className="h-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Последняя активность */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Activity" size={20} />
            Последняя активность
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="p-2 bg-primary-50 rounded-lg">
                  <Icon
                    name={activity.icon as any}
                    size={16}
                    className="text-primary"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.action}
                  </p>
                  <p className="text-sm text-gray-500">{activity.project}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Данные компании */}
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Building" size={20} />
            Данные компании
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companyData.map((data, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-700">
                  {data.label}
                </span>
                <span className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                  {data.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDataSection;
