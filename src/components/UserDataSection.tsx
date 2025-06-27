import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const UserDataSection = () => {
  const dataStats = [
    { label: "Активные проекты", value: 12, total: 20, color: "bg-primary" },
    {
      label: "Завершенные задачи",
      value: 147,
      total: 200,
      color: "bg-green-500",
    },
    {
      label: "Использование хранилища",
      value: 7.2,
      total: 10,
      color: "bg-orange-500",
      unit: "ГБ",
    },
  ];

  const recentActivity = [
    {
      action: "Обновил проект",
      project: "E-commerce Dashboard",
      time: "2 часа назад",
      icon: "GitCommit",
    },
    {
      action: "Создал документ",
      project: "API Documentation",
      time: "4 часа назад",
      icon: "FileText",
    },
    {
      action: "Загрузил файлы",
      project: "Assets Collection",
      time: "Вчера",
      icon: "Upload",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
    </div>
  );
};

export default UserDataSection;
