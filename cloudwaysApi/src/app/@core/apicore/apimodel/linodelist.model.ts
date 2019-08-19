export class LinodePricingModel {

    addons: AddonsArray[];
    class: string = '';
    disk: number;
    gpus: number;
    id: string = '';
    label: string = '';
    memory: number;
    network_out: number;
    price: PricingArray[];
    successor: string = '';
    transfer: number;
    vcpus: number;
}

export class PricingArray {
    monthly: number;
    hourly: number;
}
export class AddonsArray {
    backups: BackupArray[];
}
export class BackupArray {
    price: BackupPricingArray[];
}
export class BackupPricingArray {
    monthly: number;
    hourly: number;
}