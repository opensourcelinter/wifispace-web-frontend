export default function CoverageIndicator() {
  return (
    <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
      <p className="text-center text-sm text-muted-foreground">
        Tap or hover on areas to see details
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-500 ring-1 ring-green-600/30 shadow-sm" />
          <span className="text-sm font-medium text-foreground">
            Available now
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-500 ring-1 ring-yellow-600/30 shadow-sm" />
          <span className="text-sm font-medium text-foreground">
            Coming soon
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-500 ring-1 ring-red-500/30 shadow-sm" />
          <span className="text-sm font-medium text-foreground">
            Not yet covered
          </span>
        </div>
      </div>
    </div>
  );
}
