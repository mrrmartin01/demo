"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CurrencySelector from "./currency-selector";
import { formatCurrency } from "@/lib/utils";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState<string>("GBP");
  const [toCurrency, setToCurrency] = useState<string>("GHS");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );
  const [loading, setLoading] = useState<boolean>(true);

  const fee = amount * 0.01; // 1% fee
  const totalToPay = amount + fee;

  // Calculate the converted amount based on exchange rates
  const getConvertedAmount = () => {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return 0;

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    // Convert to USD first (as base), then to target currency
    const amountInUSD = amount / fromRate;
    return amountInUSD * toRate;
  };

  const convertedAmount = getConvertedAmount();

  // Calculate the exchange rate between the two currencies
  const getExchangeRate = () => {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return 0;

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    return toRate / fromRate;
  };

  const exchangeRate = getExchangeRate();

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();

        if (data.rates) {
          setExchangeRates(data.rates);
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();

    // Refresh rates every 30 minutes
    const intervalId = setInterval(fetchExchangeRates, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow empty input, numbers, and decimal points
    const value = e.target.value.replace(/[^\d.]/g, "");

    // Prevent multiple decimal points
    const parts = value.split(".");
    const sanitizedValue = parts[0] + (parts.length > 1 ? "." + parts[1] : "");

    // Convert to number or use 0 if empty
    const numValue =
      sanitizedValue === "" ? 0 : Number.parseFloat(sanitizedValue);
    setAmount(numValue);
  };

  return (
    <div className="max-w-md md:ml-10 mx-auto">
      <div className="space-y-6">
        {/* You send section */}
        <div className="relative">
          <div className="flex">
            <div className="flex-1">
              <Input
                type="text"
                value={
                  amount === 0 && amount.toString() === "0"
                    ? ""
                    : amount.toString()
                }
                onChange={handleAmountChange}
                className="relative text-2xl font-semibold h-15 rounded-r-none border-r-0"
                placeholder="0.00"
              />
              <Label className="absolute -top-[7px] left-3 bg-white px-2 text-xs text-muted-foreground  block">
                You send
              </Label>
            </div>
            <CurrencySelector
              value={fromCurrency}
              onChange={setFromCurrency}
              className="w-32 h-15 rounded-l-none"
            />
          </div>
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <span>
              {formatCurrency(fee, fromCurrency)} {fromCurrency} Fee
            </span>
          </div>
        </div>

        {/* Recipient gets section */}
        <div className="relative">
          <div className="flex">
            <div className="flex-1">
              <Input
                type="text"
                value={convertedAmount.toFixed(2)}
                readOnly
                className="relative text-2xl font-semibold h-15 rounded-r-none border-r-0 bg-muted"
              />
              <Label className="absolute -top-[7px] left-3 bg-white px-2 text-xs  text-muted-foreground mb-1 block">
                Recipient Gets
              </Label>
            </div>
            <CurrencySelector
              value={toCurrency}
              onChange={setToCurrency}
              className="w-32 h-15 rounded-l-none"
            />
          </div>
        </div>

        {/* Summary section */}
        <div className="p-4 bg-slate-50">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Amount we&apos;ll convert
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500">
                      Guaranteed rate (1 hrs)
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This rate is guaranteed for the next hour</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">{amount.toFixed(2)}</span>
            <span className="font-semibold">
              {fromCurrency} 1 = {toCurrency} {exchangeRate.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Total to Pay</span>
            <span className="text-muted-foreground">Average duration</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">
              {totalToPay.toFixed(2)} {fromCurrency}
            </span>
            <span className="font-semibold text-blue-600">Instant</span>
          </div>
        </div>

        <Button className="w-full h-14 text-lg font-medium bg-blue-800 hover:bg-blue-900">
          Get started for free
        </Button>
      </div>
    </div>
  );
}
