import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DocumentsSection = () => {
  const documents = [
    {
      name: "Свидетельство о государственной регистрации.pdf",
      size: "1.2 МБ",
      modified: "Сегодня, 14:30",
      type: "certificate",
      status: "active",
    },
    {
      name: "Лицензия на строительство объекта.pdf",
      size: "2.8 МБ",
      modified: "Вчера, 16:45",
      type: "license",
      status: "active",
    },
    {
      name: "Разрешение на строительство ЖК Северный.pdf",
      size: "3.1 МБ",
      modified: "3 дня назад",
      type: "permit",
      status: "active",
    },
    {
      name: "Проектная декларация.pdf",
      size: "8.4 МБ",
      modified: "Неделю назад",
      type: "declaration",
      status: "shared",
    },
    {
      name: "Договор долевого участия - образец.docx",
      size: "512 КБ",
      modified: "2 недели назад",
      type: "contract",
      status: "active",
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case "certificate":
        return "Award";
      case "license":
        return "Shield";
      case "permit":
        return "FileCheck";
      case "declaration":
        return "FileText";
      case "contract":
        return "FileSignature";
      default:
        return "File";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "shared":
        return "bg-blue-100 text-blue-700";
      case "archived":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Активный";
      case "shared":
        return "Общий доступ";
      case "archived":
        return "В архиве";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Icon name="FolderOpen" size={20} />
            Управление документами
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-1" />
              Фильтр
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-600">
              <Icon name="Plus" size={16} className="mr-1" />
              Загрузить
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all cursor-pointer group"
            >
              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-primary-100 transition-colors">
                <Icon
                  name={getFileIcon(doc.type) as any}
                  size={20}
                  className="text-gray-600 group-hover:text-primary"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">
                  {doc.name}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span>{doc.size}</span>
                  <span>•</span>
                  <span>{doc.modified}</span>
                </div>
              </div>

              <Badge className={getStatusColor(doc.status)}>
                {getStatusText(doc.status)}
              </Badge>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Icon name="Download" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Icon name="Share2" size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Icon name="MoreVertical" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Зона загрузки */}
        <div className="mt-6 p-8 border-2 border-dashed border-gray-200 rounded-xl text-center hover:border-primary-300 hover:bg-primary-50/20 transition-all">
          <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto mb-4">
            <Icon name="Upload" size={24} className="text-gray-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">
            Перетащите файлы сюда
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            или нажмите для выбора файлов
          </p>
          <Button variant="outline" size="sm">
            Выбрать файлы
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsSection;
