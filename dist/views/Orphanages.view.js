"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            open_on_weekends: orphanage.open_on_weekends,
            openning_hours: orphanage.openning_hours,
        };
    },
    renderMany(orphanages) {
        return orphanages.map(orphanage => this.render(orphanage));
    }
};
