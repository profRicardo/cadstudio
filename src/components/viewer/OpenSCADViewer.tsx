import { useCurrentMessage } from '@/contexts/CurrentMessageContext';
import { CircleAlert, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OpenSCADViewer() {
  const { currentMessage } = useCurrentMessage();
  const scadCode = currentMessage?.content.artifact?.code;

  return (
    <div className="h-full w-full bg-adam-neutral-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-adam-blue/20" />
            <Code className="h-12 w-12 text-adam-blue" />
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-adam-text-primary mb-2">
              3D Viewer Temporarily Unavailable
            </h3>
            <p className="text-sm text-adam-text-secondary max-w-md">
              The 3D model viewer is currently being updated. Your OpenSCAD code has been generated successfully.
            </p>
          </div>
        </div>

        {scadCode && (
          <div className="w-full max-w-2xl">
            <div className="bg-adam-neutral-800/50 rounded-lg p-4 border border-adam-neutral-600/30">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-4 w-4 text-adam-blue" />
                <span className="text-sm font-medium text-adam-text-primary">Generated OpenSCAD Code:</span>
              </div>
              <pre className="text-xs text-adam-text-secondary bg-adam-neutral-900/50 p-3 rounded overflow-auto max-h-40">
                <code>{scadCode}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-xs text-adam-text-secondary/70">
            The viewer will be restored in the next update. You can still copy and use the generated code.
          </p>
        </div>
      </div>
    </div>
  );
}
