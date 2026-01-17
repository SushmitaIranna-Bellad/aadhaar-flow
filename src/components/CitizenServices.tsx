import { useState } from "react";
import { Phone, Home, FileCheck, Fingerprint } from "lucide-react";
import LinkMobileModal from "./modals/LinkMobileModal";
import UpdateAddressModal from "./modals/UpdateAddressModal";
import CheckStatusModal from "./modals/CheckStatusModal";
import BiometricAuthModal from "./modals/BiometricAuthModal";

const services = [
  {
    id: "link-mobile",
    icon: Phone,
    title: "Link Mobile Number",
    subtitle: "OTP Authentication",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-200",
  },
  {
    id: "update-address",
    icon: Home,
    title: "Update Address",
    subtitle: "Upload Proof",
    color: "bg-green-100 text-green-600",
    hoverColor: "group-hover:bg-green-200",
  },
  {
    id: "check-status",
    icon: FileCheck,
    title: "Check Status",
    subtitle: "Track Request",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-200",
  },
  {
    id: "biometric-auth",
    icon: Fingerprint,
    title: "Biometric Auth",
    subtitle: "Demo Workflow",
    color: "bg-pink-100 text-pink-600",
    hoverColor: "group-hover:bg-pink-200",
  },
];

const CitizenServices = () => {
  const [linkMobileOpen, setLinkMobileOpen] = useState(false);
  const [updateAddressOpen, setUpdateAddressOpen] = useState(false);
  const [checkStatusOpen, setCheckStatusOpen] = useState(false);
  const [biometricAuthOpen, setBiometricAuthOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    switch (serviceId) {
      case "link-mobile":
        setLinkMobileOpen(true);
        break;
      case "update-address":
        setUpdateAddressOpen(true);
        break;
      case "check-status":
        setCheckStatusOpen(true);
        break;
      case "biometric-auth":
        setBiometricAuthOpen(true);
        break;
    }
  };

  return (
    <>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Citizen Services
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Quick access to common Aadhaar services
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} ${service.hoverColor} flex items-center justify-center mb-4 transition-colors`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <LinkMobileModal open={linkMobileOpen} onOpenChange={setLinkMobileOpen} />
      <UpdateAddressModal open={updateAddressOpen} onOpenChange={setUpdateAddressOpen} />
      <CheckStatusModal open={checkStatusOpen} onOpenChange={setCheckStatusOpen} />
      <BiometricAuthModal open={biometricAuthOpen} onOpenChange={setBiometricAuthOpen} />
    </>
  );
};

export default CitizenServices;
