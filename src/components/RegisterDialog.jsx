import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// 设计中心选项
const designCenters = [
  "出行和科技设计中心",
  "金融服务设计中心",
  "基础研发平台设计中心",
  "食杂零售设计中心",
  "闪购设计中心",
  "酒店旅行设计中心",
  "团购和软硬件服务设计中心",
  "品牌营销设计中心",
  "美团平台设计中心",
  "医药健康设计中心",
  "外卖和履约平台设计中心"
];

// 设计组选项映射
const designGroupsMap = {
  "出行和科技设计中心": [],
  "金融服务设计中心": ["创意营销设计组", "支付产品设计组", "微贷和信用产品设计组", "保险产品设计组"],
  "基础研发平台设计中心": ["智能创新设计组", "办公效率和CAP产品设计组", "数据科学与平台产品设计组", "设计效能工具组", "HR和财务ERP产品设计组", "研发质效和信息安全产品设计组"],
  "食杂零售设计中心": ["快驴设计组", "小象产品设计组", "优选产品设计组", "创意营销设计组", "商品物流和中后台产品设计组"],
  "闪购设计中心": ["（旧）创意营销设计组", "闪购C端设计组", "商家端设计组", "创意营销设计组", "IT赋能设计组"],
  "酒店旅行设计中心": ["住宿用户端设计组", "用户研究组", "门票度假交通用户端设计组", "商家端设计组", "营销创意设计组", "民宿设计", "频道产品设计"],
  "团购和软硬件服务设计中心": ["到餐用户端设计组", "SaaS和充电宝设计组", "到综用户端设计组", "骑行设计组", "商家端设计组", "创意营销设计组", "团购设计中心用研"],
  "品牌营销设计中心": ["文创设计组", "AI设计能力建设组", "品牌设计组"],
  "美团平台设计中心": ["平台产品设计组", "用户增长与运营设计组", "商业增值设计组", "体验研究组", "业务产品设计组", "地图和网约车自动车设计组", "客服体验和企业业务设计组", "短视频和直播设计组"],
  "医药健康设计中心": ["用户端设计组", "商家端设计组", "创意营销设计组"],
  "外卖和履约平台设计中心": ["履约平台设计组", "外卖用户端设计组", "拼好饭设计组", "商家端设计组", "创意营销设计组"]
};

// 命题赛道选项
const propositionTopics = [
  "个人健康管理", "中医调理", "变美助手", "工作情绪抚慰师", "会议/活动海报师",
  "需求解读器", "商家经营分析助手", "销售智能辅助工具", "营销会场A/B测试自动化",
  "智能购药生活管家", "商家保障服务规划师", "点餐小助手", "乐生活小助手", "易生活小助手",
  "搜索场景 AI 助手", "营销AI智能审核", "袋鼠Coser", "美团外卖选购助手", "骑手关怀",
  "AI 美食相机", "设计提效工具", "对话式海报设计助手", "商家助手", "选购助手",
  "水果店进货助手", "优选司机配送日程助手"
];

export function RegisterDialog({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    designCenter: "",
    designGroup: "",
    designer: "",
    track: "open",
    topic: "为美好生活而设计"
  });
  const [errors, setErrors] = useState({});
  const [openDesignCenter, setOpenDesignCenter] = useState(false);
  const [openDesignGroup, setOpenDesignGroup] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);

  // 重置表单数据
  const resetForm = () => {
    setFormData({
      designCenter: "",
      designGroup: "",
      designer: "",
      track: "open",
      topic: "为美好生活而设计"
    });
    setErrors({});
  };

  // 处理对话框关闭
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      resetForm();
    }
    onOpenChange(newOpen);
  };

  const handleSubmit = async () => {
    // 验证所有字段
    const newErrors = {};
    if (!formData.designCenter) newErrors.designCenter = true;
    if (!formData.designGroup) newErrors.designGroup = true;
    if (!formData.designer) newErrors.designer = true;
    if (!formData.track) newErrors.track = true;
    if (!formData.topic) newErrors.topic = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 目前没有接入数据库，所以直接显示失败提示
    toast.error("提交失败", {
      description: "您可以通过页面下方的联系方式联系我们报名",
      className: "bg-white border border-red-200 text-red-600",
      position: "top-center",
      icon: <X className="h-5 w-5 text-red-600 mt-0.5" />
    });
  };

  const handleDesignCenterChange = (value) => {
    setFormData(prev => ({ ...prev, designCenter: value, designGroup: "" }));
    setOpenDesignCenter(false);
  };

  const handleDesignGroupChange = (value) => {
    setFormData(prev => ({ ...prev, designGroup: value }));
    setOpenDesignGroup(false);
  };

  const handleTopicChange = (value) => {
    setFormData(prev => ({ ...prev, topic: value }));
    setOpenTopic(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px] [&>button]:hidden !rounded-[20px] sm:!rounded-[20px]">
        <DialogHeader className="relative">
          <DialogTitle className="text-[18px] font-medium">请填写报名表</DialogTitle>
          <DialogClose className="absolute right-0 top-1/2 -translate-y-1/2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:bg-[#F3F3F4] hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">关闭</span>
          </DialogClose>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* 设计中心 */}
          <div className="grid gap-2">
            <Label htmlFor="designCenter">
              设计中心
            </Label>
            <Popover open={openDesignCenter} onOpenChange={setOpenDesignCenter}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Input
                    value={formData.designCenter}
                    onChange={(e) => setFormData(prev => ({ ...prev, designCenter: e.target.value }))}
                    placeholder={errors.designCenter ? "请选择或手动填写设计中心" : "请选择或手动填写设计中心"}
                    className={cn(
                      "w-full pr-8 bg-white rounded-lg focus-visible:ring-[#B5E257] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:border-[#B5E257] placeholder:text-gray-300",
                      errors.designCenter && "border-red-500 placeholder:text-red-500"
                    )}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setOpenDesignCenter(!openDesignCenter)}
                  >
                    <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform duration-200", openDesignCenter && "rotate-180")} />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
                <Command className="overflow-hidden">
                  <CommandEmpty>暂无记录，您可以手动填写</CommandEmpty>
                  <div 
                    className="max-h-[200px] overflow-y-auto" 
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 transparent' }}
                    onWheel={(e) => {
                      e.stopPropagation();
                      e.currentTarget.scrollTop += e.deltaY;
                      e.preventDefault();
                    }}
                  >
                    <CommandGroup>
                      {designCenters.map((center) => (
                        <CommandItem
                          key={center}
                          value={center}
                          onSelect={handleDesignCenterChange}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              formData.designCenter === center ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {center}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </div>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* 设计组 */}
          <div className="grid gap-2">
            <Label htmlFor="designGroup">
              设计组
            </Label>
            <Popover open={openDesignGroup} onOpenChange={setOpenDesignGroup}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Input
                    value={formData.designGroup}
                    onChange={(e) => setFormData(prev => ({ ...prev, designGroup: e.target.value }))}
                    placeholder={errors.designGroup ? "请选择或手动填写设计组" : "请选择或手动填写设计组"}
                    className={cn(
                      "w-full pr-8 bg-white rounded-lg focus-visible:ring-[#B5E257] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:border-[#B5E257] placeholder:text-gray-300",
                      errors.designGroup && "border-red-500 placeholder:text-red-500"
                    )}
                    disabled={!formData.designCenter}
                    title={!formData.designCenter ? "请先选择设计中心" : ""}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setOpenDesignGroup(!openDesignGroup)}
                    disabled={!formData.designCenter}
                  >
                    <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform duration-200", openDesignGroup && "rotate-180")} />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
                <Command className="overflow-hidden">
                  <CommandEmpty>
                    {formData.designCenter === "出行和科技设计中心" 
                      ? "暂无记录，您可以手动填写，如无设计组请填写'无'"
                      : "暂无记录，您可以手动填写"}
                  </CommandEmpty>
                  <div 
                    className="max-h-[200px] overflow-y-auto" 
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 transparent' }}
                    onWheel={(e) => {
                      e.stopPropagation();
                      e.currentTarget.scrollTop += e.deltaY;
                      e.preventDefault();
                    }}
                  >
                    <CommandGroup>
                      {designGroupsMap[formData.designCenter]?.map((group) => (
                        <CommandItem
                          key={group}
                          value={group}
                          onSelect={handleDesignGroupChange}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              formData.designGroup === group ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {group}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </div>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* 参赛设计师 */}
          <div className="grid gap-2">
            <Label htmlFor="designer">
              参赛设计师
            </Label>
            <Input
              id="designer"
              value={formData.designer}
              onChange={(e) => setFormData(prev => ({ ...prev, designer: e.target.value }))}
              placeholder={errors.designer ? "请填写您的姓名" : "请填写您的姓名"}
              className={cn("bg-white rounded-lg focus-visible:ring-[#B5E257] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:border-[#B5E257] placeholder:text-gray-300", errors.designer && "border-red-500 placeholder:text-red-500")}
            />
          </div>

          {/* 选择题目 */}
          <div className="grid gap-[18px]">
            <Label htmlFor="topic">
              选择题目
            </Label>
            <RadioGroup
              value={formData.track}
              onValueChange={(value) => setFormData(prev => ({ ...prev, track: value, topic: value === "open" ? "为美好生活而设计" : "" }))}
              className={cn("flex space-x-6", errors.track && "border-red-500")}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="open" id="open" className="text-[#B5E257] border-[#B5E257]" />
                <Label htmlFor="open" className="font-normal">开放赛道</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="proposition" id="proposition" className="text-[#F364B8] border-[#F364B8]" />
                <Label htmlFor="proposition" className="font-normal">命题赛道</Label>
              </div>
            </RadioGroup>
            <Popover open={openTopic} onOpenChange={setOpenTopic}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Input
                    value={formData.topic}
                    onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                    placeholder={errors.topic ? "请选择题目" : "请选择题目"}
                    className={cn(
                      "w-full pr-8 bg-white rounded-lg focus-visible:ring-[#B5E257] focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:border-[#B5E257] placeholder:text-gray-300",
                      formData.track === "proposition" && "focus-visible:ring-[#F364B8] focus-visible:border-[#F364B8]",
                      errors.topic && "border-red-500 placeholder:text-red-500"
                    )}
                    disabled={formData.track === "open"}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setOpenTopic(!openTopic)}
                    disabled={formData.track === "open"}
                  >
                    <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform duration-200", openTopic && "rotate-180")} />
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
                <Command className="overflow-hidden">
                  <CommandEmpty>未查询到选题</CommandEmpty>
                  <div 
                    className="max-h-[200px] overflow-y-auto" 
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 transparent' }}
                    onWheel={(e) => {
                      e.stopPropagation();
                      e.currentTarget.scrollTop += e.deltaY;
                      e.preventDefault();
                    }}
                  >
                    <CommandGroup>
                      {propositionTopics.map((topic) => (
                        <CommandItem
                          key={topic}
                          value={topic}
                          onSelect={handleTopicChange}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              formData.topic === topic ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {topic}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </div>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <p className="text-sm text-gray-400">如果您后续希望更改选题，请及时联系工作人员</p>
        </div>
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={() => handleOpenChange(false)} className="rounded-lg h-10">
            取消
          </Button>
          <Button onClick={handleSubmit} className="rounded-lg h-10">
            提交
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 