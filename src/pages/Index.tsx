import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Index = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', label: 'Введение', icon: 'BookOpen' },
    { id: 'mascara', label: 'Тушь', icon: 'Sparkles' },
    { id: 'foundation', label: 'Тональное', icon: 'Droplet' },
    { id: 'lips', label: 'Помады', icon: 'Heart' },
    { id: 'conclusion', label: 'Выводы', icon: 'CheckCircle' },
    { id: 'sources', label: 'Источники', icon: 'Library' },
  ];

  const mascaraIngredients = [
    { name: 'Воск (Carnauba, Beeswax)', benefit: 'Создаёт объём, фиксирует форму', harm: 'Может утяжелять ресницы', safety: 'Безопасен' },
    { name: 'Полимеры (PVP, VP/VA)', benefit: 'Водостойкость, стойкость', harm: 'Возможна аллергия', safety: 'Умеренно' },
    { name: 'Пигменты (Iron Oxides)', benefit: 'Насыщенный цвет', harm: 'Редко — раздражение', safety: 'Безопасны' },
    { name: 'Парабены', benefit: 'Консервант', harm: 'Гормональное нарушение', safety: 'Спорно' },
  ];

  const foundationIngredients = [
    { name: 'Силиконы (Dimethicone)', benefit: 'Гладкость, заполнение пор', harm: 'Закупорка пор у жирной кожи', safety: 'Условно' },
    { name: 'Диоксид титана (TiO₂)', benefit: 'Покрытие, SPF-защита', harm: 'Сухость кожи', safety: 'Безопасен' },
    { name: 'Глицерин', benefit: 'Увлажнение', harm: 'Липкость во влажном климате', safety: 'Безопасен' },
    { name: 'Тальк', benefit: 'Матирование', harm: 'Сухость, редко — загрязнения', safety: 'Условно' },
  ];

  const lipProducts = [
    { type: 'Гигиенические помады', ingredients: 'Воск, масла, витамин E', effect: 'Увлажнение, защита', safety: 'Высокая' },
    { type: 'Классические помады', ingredients: 'Воск, пигменты, масла', effect: 'Стойкий цвет, питание', safety: 'Высокая' },
    { type: 'Тинты', ingredients: 'Красители, спирт, полимеры', effect: 'Долговременный цвет', safety: 'Средняя (спирт сушит)' },
    { type: 'Блески', ingredients: 'Масла, воск, светоотражающие частицы', effect: 'Блеск, визуальный объём', safety: 'Высокая' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Химия в декоративной косметике
          </h1>
          <p className="text-center text-muted-foreground mt-2">Польза и вред косметических средств</p>
        </div>
      </header>

      <nav className="sticky top-[88px] z-40 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'bg-secondary/50 text-foreground hover:bg-secondary'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {activeSection === 'intro' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="Flask" size={32} className="text-primary" />
                  Введение в химию косметики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p>
                  Декоративная косметика — это сложная химическая система, где каждый ингредиент выполняет определённую функцию. 
                  В этом проекте мы исследуем химический состав популярных косметических средств: туши для ресниц, 
                  тональных средств и помад различных типов.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <Card className="bg-secondary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Target" size={20} className="text-primary" />
                        Цель проекта
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Изучить химический состав косметики и оценить влияние компонентов на здоровье
                    </CardContent>
                  </Card>
                  <Card className="bg-accent/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Microscope" size={20} className="text-primary" />
                        Методы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Анализ состава по INCI, изучение научных публикаций о безопасности компонентов
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="TrendingUp" size={20} className="text-primary" />
                        Актуальность
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      Осознанный выбор косметики с учётом химического состава и типа кожи
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'mascara' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                  Тушь для ресниц
                </CardTitle>
                <CardDescription className="text-base">Химический состав и воздействие на ресницы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Icon name="Atom" size={24} className="text-primary" />
                    Основные компоненты
                  </h3>
                  <p className="text-base leading-relaxed">
                    Тушь для ресниц состоит из восков (создают объём и текстуру), полимеров (обеспечивают стойкость), 
                    пигментов (придают цвет) и консервантов (предотвращают размножение бактерий).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Table" size={24} className="text-primary" />
                    Таблица сравнения ингредиентов
                  </h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-primary/10">
                          <TableHead className="font-bold">Компонент</TableHead>
                          <TableHead className="font-bold">Польза</TableHead>
                          <TableHead className="font-bold">Возможный вред</TableHead>
                          <TableHead className="font-bold">Безопасность</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mascaraIngredients.map((ingredient, index) => (
                          <TableRow key={index} className="hover:bg-secondary/30 transition-colors">
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell className="text-green-700">{ingredient.benefit}</TableCell>
                            <TableCell className="text-amber-700">{ingredient.harm}</TableCell>
                            <TableCell>
                              <Badge variant={ingredient.safety === 'Безопасен' ? 'default' : ingredient.safety === 'Умеренно' ? 'secondary' : 'outline'}>
                                {ingredient.safety}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="AlertCircle" size={20} className="text-amber-600" />
                      Рекомендации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-green-600 mt-1 flex-shrink-0" />
                        <span>Избегайте тушей с парабенами при чувствительной коже</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-green-600 mt-1 flex-shrink-0" />
                        <span>Меняйте тушь каждые 3 месяца во избежание инфекций</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-green-600 mt-1 flex-shrink-0" />
                        <span>Выбирайте гипоаллергенные формулы при ношении контактных линз</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'foundation' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="Droplet" size={32} className="text-primary" />
                  Тональное средство
                </CardTitle>
                <CardDescription className="text-base">Анализ ингредиентов и их влияние на кожу</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Icon name="Layers" size={24} className="text-primary" />
                    Функции компонентов
                  </h3>
                  <p className="text-base leading-relaxed">
                    Тональные средства содержат силиконы (для гладкости нанесения), минеральные пигменты (для покрытия), 
                    увлажняющие агенты (глицерин, гиалуроновая кислота) и UV-фильтры. Формулы варьируются от лёгких 
                    BB-кремов до плотных камуфляжных средств.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Table" size={24} className="text-primary" />
                    Таблица компонентов тонального средства
                  </h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-primary/10">
                          <TableHead className="font-bold">Ингредиент</TableHead>
                          <TableHead className="font-bold">Польза</TableHead>
                          <TableHead className="font-bold">Возможный вред</TableHead>
                          <TableHead className="font-bold">Безопасность</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {foundationIngredients.map((ingredient, index) => (
                          <TableRow key={index} className="hover:bg-secondary/30 transition-colors">
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell className="text-green-700">{ingredient.benefit}</TableCell>
                            <TableCell className="text-amber-700">{ingredient.harm}</TableCell>
                            <TableCell>
                              <Badge variant={ingredient.safety === 'Безопасен' ? 'default' : 'secondary'}>
                                {ingredient.safety}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                        <Icon name="ThumbsUp" size={20} />
                        Для жирной кожи
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-green-900">
                      Выбирайте средства с тальком, каолином, матирующими силиконами. Избегайте масел и плотных текстур.
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                        <Icon name="Droplets" size={20} />
                        Для сухой кожи
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-900">
                      Ищите глицерин, гиалуроновую кислоту, масла. Избегайте спирта и большого количества талька.
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'lips' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="Heart" size={32} className="text-primary" />
                  Помады, тинты, блески
                </CardTitle>
                <CardDescription className="text-base">Сравнительный анализ средств для губ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-base leading-relaxed">
                    Средства для губ различаются по составу и функциям: от ухаживающих гигиенических помад до 
                    стойких тинтов. Основные компоненты — воски, масла, пигменты и активные добавки.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Table" size={24} className="text-primary" />
                    Сравнение типов средств для губ
                  </h3>
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-primary/10">
                          <TableHead className="font-bold">Тип продукта</TableHead>
                          <TableHead className="font-bold">Основные ингредиенты</TableHead>
                          <TableHead className="font-bold">Эффект</TableHead>
                          <TableHead className="font-bold">Безопасность</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {lipProducts.map((product, index) => (
                          <TableRow key={index} className="hover:bg-secondary/30 transition-colors">
                            <TableCell className="font-medium">{product.type}</TableCell>
                            <TableCell>{product.ingredients}</TableCell>
                            <TableCell className="text-green-700">{product.effect}</TableCell>
                            <TableCell>
                              <Badge variant={product.safety === 'Высокая' ? 'default' : 'secondary'}>
                                {product.safety}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <Tabs defaultValue="hygiene" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="hygiene">Гигиенические</TabsTrigger>
                    <TabsTrigger value="classic">Классические</TabsTrigger>
                    <TabsTrigger value="tints">Тинты</TabsTrigger>
                    <TabsTrigger value="glosses">Блески</TabsTrigger>
                  </TabsList>
                  <TabsContent value="hygiene" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Гигиенические помады</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={18} className="text-green-600 mt-1" />
                          <span><strong>Плюсы:</strong> Увлажнение, защита от ветра и холода, витамины E и B5</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={18} className="text-red-600 mt-1" />
                          <span><strong>Минусы:</strong> Не создают цвет, некоторые содержат минеральные масла</span>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="classic" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Классические помады</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={18} className="text-green-600 mt-1" />
                          <span><strong>Плюсы:</strong> Насыщенный цвет, питательные масла, разнообразие оттенков</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={18} className="text-red-600 mt-1" />
                          <span><strong>Минусы:</strong> Могут содержать тяжёлые металлы в пигментах (проверять сертификаты)</span>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="tints" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Тинты</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={18} className="text-green-600 mt-1" />
                          <span><strong>Плюсы:</strong> Долгая стойкость (до 12 часов), лёгкая текстура, натуральный эффект</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={18} className="text-red-600 mt-1" />
                          <span><strong>Минусы:</strong> Спирт в составе может сушить губы, сложно снимать</span>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="glosses" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Блески для губ</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={18} className="text-green-600 mt-1" />
                          <span><strong>Плюсы:</strong> Визуальный объём, увлажнение, могут содержать масло жожоба</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={18} className="text-red-600 mt-1" />
                          <span><strong>Минусы:</strong> Липкая текстура, недолговечны, могут попадать в рот</span>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'conclusion' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="CheckCircle" size={32} className="text-primary" />
                  Выводы и рекомендации
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Основные выводы</h3>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <Icon name="ChevronRight" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Большинство косметических ингредиентов безопасны</strong> при соблюдении норм использования и 
                        сертификации (FDA, EWG, Cosmetics Europe).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="ChevronRight" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Парабены, формальдегиды и некоторые синтетические ароматизаторы</strong> вызывают споры — 
                        стоит выбирать косметику без них при повышенной чувствительности.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="ChevronRight" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Натуральные компоненты не всегда безопаснее синтетических</strong> — важна концентрация 
                        и качество очистки вещества.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="ChevronRight" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Индивидуальная реакция</strong> — главный фактор. Всегда проводите тест на аллергию перед 
                        использованием нового продукта.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                        <Icon name="ShieldCheck" size={24} />
                        Безопасный выбор
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-green-900">
                      <p className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        Проверяйте сертификаты
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        Читайте состав (INCI)
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        Учитывайте тип кожи
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        Тестируйте новинки
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
                        <Icon name="AlertTriangle" size={24} />
                        Избегать при аллергии
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-amber-900">
                      <p className="flex items-center gap-2">
                        <Icon name="X" size={16} className="text-red-600" />
                        Парабены (methylparaben)
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="X" size={16} className="text-red-600" />
                        Формальдегид и доноры
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="X" size={16} className="text-red-600" />
                        Синтетические ароматизаторы
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="X" size={16} className="text-red-600" />
                        Сульфаты (SLS, SLES)
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lightbulb" size={24} className="text-primary" />
                      Практические советы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-base">
                    <p>✨ Меняйте тушь каждые 3 месяца</p>
                    <p>✨ Храните косметику в прохладном месте</p>
                    <p>✨ Смывайте макияж перед сном</p>
                    <p>✨ Используйте гипоаллергенные средства для снятия макияжа</p>
                    <p>✨ Не делитесь косметикой с другими людьми</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'sources' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <Icon name="Library" size={32} className="text-primary" />
                  Список источников и литературы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-base">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <p className="font-semibold">1. Базы данных и регуляторы</p>
                    <ul className="mt-2 ml-4 space-y-1 text-muted-foreground">
                      <li>• FDA (Food and Drug Administration) — Cosmetics Safety</li>
                      <li>• EWG Skin Deep® Cosmetics Database</li>
                      <li>• Европейская комиссия — CosIng Database</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/30 rounded-lg">
                    <p className="font-semibold">2. Научные публикации</p>
                    <ul className="mt-2 ml-4 space-y-1 text-muted-foreground">
                      <li>• Journal of Cosmetic Science</li>
                      <li>• International Journal of Cosmetic Science</li>
                      <li>• Darbre P.D. "Parabens in cosmetics" (2019)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold">3. Учебная литература</p>
                    <ul className="mt-2 ml-4 space-y-1 text-muted-foreground">
                      <li>• Gabrini M., Kahane T. "Cosmetic Science and Technology" (2017)</li>
                      <li>• Draelos Z.D. "Cosmetic Dermatology" (2021)</li>
                      <li>• Учебник химии для 10 класса (органическая химия)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="font-semibold">4. Профессиональные ресурсы</p>
                    <ul className="mt-2 ml-4 space-y-1 text-muted-foreground">
                      <li>• Personal Care Products Council (PCPC)</li>
                      <li>• Cosmetics Europe — The Personal Care Association</li>
                      <li>• INCI Nomenclature Committee</li>
                    </ul>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-secondary/20 to-accent/20 mt-6">
                  <CardContent className="pt-6">
                    <p className="text-center text-sm text-muted-foreground italic">
                      Проект выполнен в рамках курса химии, 10 класс, 2026 год
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Sparkles" size={18} className="text-primary" />
            Школьный проект по химии декоративной косметики
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;