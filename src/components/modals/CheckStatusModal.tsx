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
import { FileCheck, Search, Clock, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface CheckStatusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type StatusType = "pending" | "processing" | "completed" | "rejected" | null;

const CheckStatusModal = ({ open, onOpenChange }: CheckStatusModalProps) => {
  const [requestId, setRequestId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>(null);
  const [statusDetails, setStatusDetails] = useState<{
    date: string;
    message: string;
  } | null>(null);

  const mockStatuses: Record<string, { status: StatusType; message: string }> = {
    pending: {
      status: "pending",
      message: "Your request is waiting to be processed. Expected time: 2-3 working days."
    },
    processing: {
      status: "processing",
      message: "Your request is currently being processed. Please check back in 24 hours."
    },
    completed: {
      status: "completed",
      message: "Your request has been successfully completed. Changes are now reflected."
    },
    rejected: {
      status: "rejected",
      message: "Your request was rejected due to invalid documents. Please resubmit with valid proof."
    }
  };

  const handleCheckStatus = () => {
    if (requestId.trim().length < 5) {
      toast.error("Please enter a valid Enrollment ID or Update Request Number");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      // Simulate random status
      const statuses = Object.keys(mockStatuses);
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const result = mockStatuses[randomStatus];
      
      setStatus(result.status);
      setStatusDetails({
        date: new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }),
        message: result.message
      });
      setIsLoading(false);
    }, 2000);
  };

  const handleClose = () => {
    setRequestId("");
    setStatus(null);
    setStatusDetails(null);
    onOpenChange(false);
  };

  const getStatusIcon = () => {
    switch (status) {
      case "pending":
        return <Clock className="h-12 w-12 text-yellow-500" />;
      case "processing":
        return <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />;
      case "completed":
        return <CheckCircle2 className="h-12 w-12 text-green-500" />;
      case "rejected":
        return <XCircle className="h-12 w-12 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "processing":
        return "text-blue-600 bg-blue-50";
      case "completed":
        return "text-green-600 bg-green-50";
      case "rejected":
        return "text-red-600 bg-red-50";
      default:
        return "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <FileCheck className="h-5 w-5 text-orange-600" />
            </div>
            Check Status
          </DialogTitle>
        </DialogHeader>

        {!status ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="requestId">Enrollment ID / Update Request Number</Label>
              <Input
                id="requestId"
                placeholder="Enter your ID (e.g., URN1234567890)"
                value={requestId}
                onChange={(e) => setRequestId(e.target.value.toUpperCase())}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Enter your Enrollment ID (EID) or Update Request Number (URN) to check the current status.
            </p>
            <Button 
              onClick={handleCheckStatus} 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Checking Status...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Check Status
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="flex justify-center">
              <div className={`p-4 rounded-full ${getStatusColor()}`}>
                {getStatusIcon()}
              </div>
            </div>
            
            <div className="text-center">
              <p className={`text-lg font-semibold capitalize ${getStatusColor().split(" ")[0]}`}>
                {status}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {statusDetails?.date}
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Request ID</p>
              <p className="text-sm font-mono">{requestId}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm">{statusDetails?.message}</p>
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  setStatus(null);
                  setStatusDetails(null);
                }}
                className="flex-1"
              >
                Check Another
              </Button>
              <Button onClick={handleClose} className="flex-1">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckStatusModal;
