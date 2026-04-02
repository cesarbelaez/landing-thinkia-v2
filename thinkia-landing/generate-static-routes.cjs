const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const routes = ['pago-confirmado', 'reserva-confirmada', 'privacidad', 'terminos'];

if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist. Run npm run build first.');
    process.exit(1);
}

const originalHtmlPath = path.join(distDir, 'index.html');
const originalHtml = fs.readFileSync(originalHtmlPath, 'utf8');

routes.forEach(route => {
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    // Fix paths for subdirectories: change ./ to ../
    // We only target things like href="./ or src="./
    let modifiedHtml = originalHtml
        .replace(/href="\.\//g, 'href="../')
        .replace(/src="\.\//g, 'src="../')
        .replace(/content="\.\//g, 'content="../');

    // Inject "Force Route" variable so this specific file ALWAYS shows the right content
    const forceScript = `<script>window.FORCE_ROUTE = "${route}";</script>`;
    modifiedHtml = modifiedHtml.replace('<head>', `<head>${forceScript}`);

    fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
    console.log(`Created static route: ${route} (with Forced Injection)`);
});
