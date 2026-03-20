<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mantenimiento | Explore Emotions</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg-1: #f4efe6;
            --bg-2: #dde9d2;
            --ink: #1b2b24;
            --muted: #5b6f66;
            --card: rgba(255, 255, 255, 0.72);
            --border: rgba(27, 43, 36, 0.14);
            --accent: #c95d2f;
            --accent-soft: #e89a79;
            --ok: #2f8f6a;
            --shadow: 0 18px 50px rgba(27, 43, 36, 0.12);
        }

        * {
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
            margin: 0;
        }

        body {
            font-family: "Space Grotesk", sans-serif;
            color: var(--ink);
            background:
                radial-gradient(circle at 10% 20%, rgba(201, 93, 47, 0.12), transparent 28%),
                radial-gradient(circle at 88% 78%, rgba(47, 143, 106, 0.14), transparent 30%),
                linear-gradient(140deg, var(--bg-1), var(--bg-2));
            display: grid;
            place-items: center;
            padding: 24px;
            overflow: hidden;
        }

        .orb {
            position: fixed;
            border-radius: 999px;
            filter: blur(2px);
            opacity: 0.45;
            pointer-events: none;
            animation: drift 12s ease-in-out infinite;
        }

        .orb.one {
            width: 220px;
            height: 220px;
            background: rgba(201, 93, 47, 0.24);
            top: -60px;
            right: -40px;
        }

        .orb.two {
            width: 180px;
            height: 180px;
            background: rgba(47, 143, 106, 0.2);
            bottom: -50px;
            left: -30px;
            animation-delay: 1.2s;
        }

        .panel {
            width: min(760px, 100%);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 24px;
            box-shadow: var(--shadow);
            padding: clamp(24px, 5vw, 46px);
            position: relative;
            z-index: 2;
            animation: rise 550ms ease-out;
        }

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 8px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.72);
            border: 1px solid rgba(27, 43, 36, 0.12);
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 0.04em;
            text-transform: uppercase;
        }

        .dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: var(--ok);
            box-shadow: 0 0 0 0 rgba(47, 143, 106, 0.65);
            animation: pulse 1.8s infinite;
        }

        .code {
            margin: 20px 0 8px;
            color: var(--accent);
            font-weight: 700;
            letter-spacing: 0.07em;
            font-size: 0.88rem;
        }

        p {
            margin: 16px 0 0;
            color: var(--muted);
            line-height: 1.65;
            font-size: clamp(1rem, 2vw, 1.1rem);
            max-width: 60ch;
        }

        .grid {
            margin-top: 28px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        .item span {
            color: var(--muted);
            font-size: 0.94rem;
        }

        .actions {
            margin-top: 28px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .btn {
            appearance: none;
            border: 0;
            text-decoration: none;
            cursor: pointer;
            border-radius: 12px;
            padding: 12px 18px;
            font-weight: 700;
            font-size: 0.95rem;
            transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
        }

        .btn.primary {
            background: var(--ink);
            color: #fff;
            box-shadow: 0 8px 18px rgba(27, 43, 36, 0.2);
        }

        .btn.secondary {
            background: rgba(255, 255, 255, 0.82);
            color: var(--ink);
            border: 1px solid var(--border);
        }

        .btn:hover {
            transform: translateY(-1px);
        }

        .footer-note {
            margin-top: 20px;
            color: var(--muted);
            font-size: 0.9rem;
        }

        @media (max-width: 700px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .actions {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(47, 143, 106, 0.65);
            }
            70% {
                box-shadow: 0 0 0 8px rgba(47, 143, 106, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(47, 143, 106, 0);
            }
        }

        @keyframes rise {
            from {
                opacity: 0;
                transform: translateY(12px) scale(0.99);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        @keyframes drift {
            0%,
            100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    </style>
</head>
<body>
    <div class="orb one" aria-hidden="true"></div>
    <div class="orb two" aria-hidden="true"></div>

    <main class="panel" role="main" aria-labelledby="maintenance-title">
        <div class="eyebrow">
            <span class="dot" aria-hidden="true"></span>
            Estado del servicio
        </div>

        <div class="code">ERROR 503</div>

        <p>
            La plataforma se encuentra temporalmente en mantenimiento.
            Favor de comunicarse con el administrador para mas detalles. Disculpe las molestias.
        </p>

        <div class="actions">
            <button class="btn primary" type="button" onclick="window.location.reload()">Reintentar</button>
            <a class="btn secondary" href="{{ url('/') }}">Ir al inicio</a>
        </div>

    </main>
</body>
</html>
