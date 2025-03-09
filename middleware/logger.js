export const logger = (req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`${req.method} - ${res.statusCode} ${req.protocol}://${req.get('host')}${req.originalUrl} ${duration}ms`);
        if(req.body && Object.keys(req.body).length > 0) console.log(req.body);
    })
    next();
}