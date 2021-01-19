"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTOUCH_SERVICE = exports.TransactionDTO = void 0;
const class_validator_1 = require("class-validator");
class TransactionDTO {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TransactionDTO.prototype, "tx_type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TransactionDTO.prototype, "subtype", void 0);
__decorate([
    class_validator_1.IsNumberString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], TransactionDTO.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], TransactionDTO.prototype, "recipient", void 0);
exports.TransactionDTO = TransactionDTO;
exports.INTOUCH_SERVICE = {
    ORANGE: {
        CASHIN: 'BF_PAIEMENTMARCHAND_OM',
        CASHOUT: 'BF_CASHIN_OM',
        AIRTIME: 'BF_AIRTIME_ORANGE',
        ORDER: ''
    },
    TELMOB: {
        CASHIN: 'BF_PAIEMENTMARCHAND_MOBICASH',
        CASHOUT: 'BF_CASHIN_MOBICASH',
        AIRTIME: 'BF_AIRTIME_TELMOB',
        ORDER: ''
    },
    TELECEL: {
        CASHIN: '',
        CASHOUT: '',
        AIRTIME: 'BF_AIRTIME_TELECEL',
        ORDER: ''
    },
    CORIS: {
        CASHIN: 'BF_PAIEMENTMARCHAND_CORIS',
        CASHOUT: 'BF_CASHIN_CORIS',
        AIRTIME: '',
        ORDER: ''
    },
    YUP: {
        CASHIN: 'BF_PAIEMENTMARCHAND_YUP',
        CASHOUT: 'BF_CASHIN_YUP',
        AIRTIME: '',
        ORDER: ''
    }
};
//# sourceMappingURL=transaction.dto.js.map