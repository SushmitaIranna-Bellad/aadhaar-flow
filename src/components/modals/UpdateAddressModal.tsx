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
import { Home, Upload, CheckCircle2, ArrowRight, FileText, X } from "lucide-react";
import { toast } from "sonner";

interface UpdateAddressModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UpdateAddressModal = ({ open, onOpenChange }: UpdateAddressModalProps) => {
  const [step, setStep] = useState(1);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [requestId, setRequestId] = useState("");

  const handleProceedToUpload = () => {
    if (aadhaarNumber.length !== 12) {
      toast.error("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    setStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      setUploadedFile(file);
      toast.success("Document uploaded successfully");
    }
  };

  const handleSubmitRequest = () => {
    if (!uploadedFile) {
      toast.error("Please upload an address proof document");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRequestId(`URN${Date.now().toString().slice(-10)}`);
      setStep(3);
      toast.success("Address update request submitted!");
    }, 2000);
  };

  const handleClose = () => {
    setStep(1);
    setAadhaarNumber("");
    setUploadedFile(null);
    setRequestId("");
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
            <div className="p-2 bg-green-100 rounded-lg">
              <Home className="h-5 w-5 text-green-600" />
            </div>
            Update Address
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
            <p className="text-sm text-muted-foreground">
              You will need to upload a valid address proof document in the next step.
            </p>
            <Button 
              onClick={handleProceedToUpload} 
              className="w-full"
            >
              Proceed to Upload
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Upload Address Proof</Label>
              <p className="text-sm text-muted-foreground">
                Accepted documents: Passport, Bank Statement, Utility Bill, Rent Agreement
              </p>
            </div>

            {!uploadedFile ? (
              <label className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <span className="text-sm font-medium">Click to upload</span>
                <span className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (max 5MB)</span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
              </label>
            ) : (
              <div className="border rounded-lg p-4 flex items-center justify-between bg-muted/50">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium truncate max-w-[180px]">
                      {uploadedFile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(uploadedFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setUploadedFile(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            <Button 
              onClick={handleSubmitRequest} 
              className="w-full"
              disabled={isLoading || !uploadedFile}
            >
              {isLoading ? "Submitting Request..." : "Submit Request"}
              <ArrowRight className="ml-2 h-4 w-4" />
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
              <h3 className="text-lg font-semibold text-green-600">Request Submitted!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your address update request has been submitted successfully.
              </p>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Update Request Number</p>
                <p className="text-lg font-mono font-semibold">{requestId}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Save this number to track your request status.
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

export default UpdateAddressModal;
