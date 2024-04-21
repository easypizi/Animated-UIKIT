export interface BaseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onAfterClose?: () => void;
}
