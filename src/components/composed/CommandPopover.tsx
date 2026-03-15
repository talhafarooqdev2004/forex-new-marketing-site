import countryList from 'country-list';
import {
    Button,
    Command,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "../ui";
import { useMemo, useState } from 'react';
import { CheckIcon } from 'lucide-react';

function getFlagEmoji(countryCode: string): string {
    return countryCode
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join('');
};

export default function CommandPopover({ control }: { control: any }) {
    const [search, setSearch] = useState<string>("");

    const filteredCountries = useMemo(() => {
        const countries = countryList.getData();
        return !search
            ? countries.slice(0, 50)
            : countries.filter(
                c => c
                    .name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
    }, [search]);

    return (
        <FormField
            control={control}
            name="country"
            render={({ field }) => {
                const selectedCountryCode = countryList.getCode(field.value);

                return (
                    <FormItem className="flex flex-col">
                        <FormLabel>Select Country</FormLabel>

                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        role="combobox"
                                        variant="outline"
                                        className="w-full justify-between h-12 rounded-md bg-white dark:bg-charcoal border border-[rgba(30,41,57,0.12)] dark:border-input text-foreground dark:text-white font-normal"
                                    >
                                        {field.value ? (
                                            <span className="flex items-center gap-2">
                                                <span>{selectedCountryCode ? getFlagEmoji(selectedCountryCode) : ''}</span>
                                                <span>{field.value}</span>
                                            </span>
                                        ) : "Select Country"}
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Search..."
                                        value={search}
                                        onValueChange={setSearch}
                                    />
                                    <CommandList>
                                        <CommandEmpty>No result found.</CommandEmpty>

                                        {filteredCountries.map((country) => (
                                            <CommandItem
                                                key={country.code}
                                                onSelect={() => field.onChange(country.name)}
                                            >
                                                <div className="flex items-center gap-2 w-full">
                                                    <span>{getFlagEmoji(country.code)}</span>
                                                    <span>{country.name}</span>
                                                    {country.name === field.value && (
                                                        <CheckIcon className="ml-auto h-4 w-4" />
                                                    )}
                                                </div>
                                            </CommandItem>
                                        ))}
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                );
            }}
        />
    );
};