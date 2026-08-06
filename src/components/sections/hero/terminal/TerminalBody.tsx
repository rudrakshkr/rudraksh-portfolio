type TerminalLine = {
    text: string;
    variant: "command" | "success" | "muted" | "json";
}

const variantStyles: Record<TerminalLine["variant"], string > = {
    command: "text-white",
    success: "text-emerald-400",
    muted: "text-zinc-400",
    json: "text-blue-400"
}

const terminalLines: TerminalLine[] = [
    {
        text: "$ git push origin main",
        variant: "command",
    },
    {
        text: "✓ Running TypeScript checks...",
        variant: "success",
    },
    {
        text: "✓ Running TypeScript checks...",
        variant: "success",
    },
    {
        text: "✓ Running TypeScript checks...",
        variant: "success",
    },
    {
        text: "$ prisma migrate deploy",
        variant: "command",
    },
    {
        text: "✓ Database schema up to date",
        variant: "success",
    },
    {
        text: "$ curl /api/health",
        variant: "command",
    },
    {
        text: '{ "status": "healthy", "database": "connected", "latency": "48ms" }',
        variant: "json",
    }
]

export default function TerminalBody() {
    return (
        <div className="space-y-2 px-6 py-6 font-mono text-sm min-h-85">
            {terminalLines.map((line, index) => (
                <p 
                    key={index}
                    className={variantStyles[line.variant]}
                >
                    {line.text}
                </p>
            ))}
        </div>
    )
}