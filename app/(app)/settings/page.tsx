import { PageHeader, Card, CardHeader, CardContent, Button, Input } from "@/components/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your account and organisation settings."
      />

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="organisation">Organisation</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader
              title="Profile Information"
              description="Update your personal details and preferences."
            />
            <CardContent>
              <form className="space-y-4 max-w-md">
                <Input
                  label="Full Name"
                  defaultValue="Alex Morgan"
                  placeholder="Enter your full name"
                />
                <Input
                  label="Email Address"
                  type="email"
                  defaultValue="alex.morgan@company.com"
                  placeholder="Enter your email"
                />
                <Input
                  label="Job Title"
                  defaultValue="Strategy Director"
                  placeholder="Enter your job title"
                />
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organisation">
          <Card>
            <CardHeader
              title="Organisation Settings"
              description="Manage your organisation details and team members."
            />
            <CardContent>
              <form className="space-y-4 max-w-md">
                <Input
                  label="Organisation Name"
                  defaultValue="TechCorp Global"
                  placeholder="Enter organisation name"
                />
                <Input
                  label="Industry"
                  defaultValue="Technology"
                  placeholder="Select industry"
                />
                <Input
                  label="Company Size"
                  defaultValue="500-1000 employees"
                  placeholder="Select company size"
                />
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader
              title="Notification Preferences"
              description="Choose how and when you want to be notified."
            />
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: "Assessment completion alerts", description: "Get notified when an assessment is completed" },
                  { label: "Weekly summary reports", description: "Receive a weekly digest of your assessments" },
                  { label: "New response notifications", description: "Get notified when respondents submit answers" },
                  { label: "AI insight notifications", description: "Get notified when new AI insights are generated" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between p-4 rounded-lg bg-neutral-50">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{item.label}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={i < 2} className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader
              title="Security Settings"
              description="Manage your password and security preferences."
            />
            <CardContent>
              <form className="space-y-4 max-w-md">
                <Input
                  label="Current Password"
                  type="password"
                  placeholder="Enter current password"
                />
                <Input
                  label="New Password"
                  type="password"
                  placeholder="Enter new password"
                />
                <Input
                  label="Confirm New Password"
                  type="password"
                  placeholder="Confirm new password"
                />
                <div className="pt-4">
                  <Button>Update Password</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
