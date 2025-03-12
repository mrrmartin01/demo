"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const currencies = [
  {
    value: "USD",
    label: "USD",
    code: "us",
    name: "US Dollar",
  },
  {
    value: "EUR",
    label: "EUR",
    code: "eu",
    name: "Euro",
  },
  {
    value: "GBP",
    label: "GBP",
    code: "gb",
    name: "British Pound",
  },
  {
    value: "JPY",
    label: "JPY",
    code: "jp",
    name: "Japanese Yen",
  },
  {
    value: "CAD",
    label: "CAD",
    code: "ca",
    name: "Canadian Dollar",
  },
  {
    value: "AUD",
    label: "AUD",
    code: "au",
    name: "Australian Dollar",
  },
  {
    value: "GHS",
    label: "GHS",
    code: "gh",
    name: "Ghanaian Cedi",
  },
  {
    value: "NGN",
    label: "NGN",
    code: "ng",
    name: "Nigerian Naira",
  },
  {
    value: "KES",
    label: "KES",
    code: "ke",
    name: "Kenyan Shilling",
  },
  {
    value: "ZAR",
    label: "ZAR",
    code: "za",
    name: "South African Rand",
  },
]

interface CurrencySelectorProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function CurrencySelector({ value, onChange, className }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false)

  const selectedCurrency = currencies.find((currency) => currency.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between bg-blue-800 text-white hover:bg-blue-900 hover:text-white border-blue-800",
            className,
          )}
        >
          <div className="flex items-center">
            {selectedCurrency && (
              <div className="mr-2 w-6 h-4 relative overflow-hidden rounded">
                <img
                  src={`https://flagcdn.com/w40/${selectedCurrency.code.toLowerCase()}.png`}
                  alt={`${selectedCurrency.name} flag`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <span>{selectedCurrency?.label}</span>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={() => {
                    onChange(currency.value)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === currency.value ? "opacity-100" : "opacity-0")} />
                  <div className="mr-2 w-6 h-4 relative overflow-hidden rounded">
                    <img
                      src={`https://flagcdn.com/w40/${currency.code.toLowerCase()}.png`}
                      alt={`${currency.name} flag`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <span>{currency.label}</span>
                  <span className="ml-2 text-xs text-muted-foreground">{currency.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

