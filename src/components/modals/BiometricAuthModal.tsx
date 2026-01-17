import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Fingerprint, CheckCircle2, Scan } from "lucide-react";
import { toast } from "sonner";

interface BiometricAuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BiometricAuthModal = ({ open, onOpenChange }: BiometricAuthModalProps) => {
  const [step, setStep] = useState<"idle" | "scanning" | "success">("idle");

  const handleStartScan = () => {
    setStep("scanning");
    toast.info("Place your finger on the scanner...");
    
    // Simulate scanning process
    setTimeout(() => {
      setStep("success");
      toast.success("Fingerprint verified successfully!");
    }, 3000);
  };

  const handleClose = () => {
    setStep("idle");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Fingerprint className="h-5 w-5 text-pink-600" />
            </div>
            Biometric Authentication
          </DialogTitle>
        </DialogHeader>

        <div className="py-8">
          {step === "idle" && (
            <div className="text-center space-y-6">
              <p className="text-sm text-muted-foreground">
                Click the fingerprint icon below to start biometric authentication demo.
              </p>
              
              <button
                onClick={handleStartScan}
                className="mx-auto block p-8 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-pink-200 hover:border-pink-300 shadow-lg hover:shadow-xl"
              >
                <Fingerprint className="h-20 w-20 text-pink-500" />
              </button>
              
              <p className="text-xs text-muted-foreground">
                Tap to scan fingerprint
              </p>
            </div>
          )}

          {step === "scanning" && (
            <div className="text-center space-y-6">
              <p className="text-sm font-medium text-blue-600">
                Scanning in progress...
              </p>
              
              <div className="mx-auto w-fit p-8 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 relative">
                <Fingerprint className="h-20 w-20 text-blue-500 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping opacity-20" />
                <div className="absolute inset-2 rounded-full border-2 border-blue-300 animate-pulse" />
                
                {/* Scanning line animation */}
                <div className="absolute inset-8 overflow-hidden rounded-full">
                  <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan" />
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Scan className="h-4 w-4 text-blue-500 animate-pulse" />
                <p className="text-xs text-muted-foreground">
                  Keep your finger steady
                </p>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-6 bg-green-100 rounded-full">
                  <CheckCircle2 className="h-16 w-16 text-green-600" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-600">
                  Authentication Successful!
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Your fingerprint has been verified successfully.
                </p>
              </div>

              <div className="p-4 bg-muted rounded-lg text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Match Score</span>
                  <span className="font-semibold text-green-600">98.7%</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Verification Time</span>
                  <span className="font-medium">2.3 seconds</span>
                </div>
              </div>
              
              <Button onClick={handleClose} className="w-full">
                Done
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BiometricAuthModal;
