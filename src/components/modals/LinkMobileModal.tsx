import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface LinkMobileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LinkMobileModal = ({ open, onOpenChange }: LinkMobileModalProps) => {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (aadhaarNumber.length !== 12) {
      toast.error("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      toast.success(`OTP sent to ${mobileNumber.slice(0, 2)}****${mobileNumber.slice(-2)}`);
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      toast.success("Mobile number linked successfully!");
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setMobileNumber("");
    setAadhaarNumber("");
    setOtp("");
    onOpenChange(false);
  };

  const formatAadhaar = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 12);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            Link Mobile Number
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="aadhaar">Aadhaar Number</Label>
              <Input
                id="aadhaar"
                placeholder="XXXX XXXX XXXX"
                value={formatAadhaar(aadhaarNumber)}
                onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ""))}
                maxLength={14}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                placeholder="Enter 10-digit mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                maxLength={10}
              />
            </div>
            <Button 
              onClick={handleSendOtp} 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground text-center">
              Enter the 6-digit OTP sent to {mobileNumber.slice(0, 2)}****{mobileNumber.slice(-2)}
            </p>
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
            </div>
            <Button 
              onClick={handleVerifyOtp} 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify & Link"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleSendOtp}
              className="w-full"
              disabled={isLoading}
            >
              Resend OTP
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 py-8 text-center">
            <div className="flex justify-center">
              <div className="p-4 bg-green-100 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600">Success!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Mobile number {mobileNumber} has been successfully linked to your Aadhaar.
              </p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LinkMobileModal;
