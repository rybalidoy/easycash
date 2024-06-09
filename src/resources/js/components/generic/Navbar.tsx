import { Accordion } from "@/lib/components/ui/accordion";
import { buttonVariants } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";
import { NavItem } from "@/routes/routes";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";



interface NavbarProps {
  items: NavItem[];
  setOpen?: (open: boolean) => void;
  className?: string;
}

const Navbar = ({ items, setOpen, className }: NavbarProps) => {
  
  const location = useLocation(); 
  const [openItem, setOpenItem] = useState("");
  
  return (
    <nav className="space-y-2">
      {items?.map(item => 
        item?.hasChildren ? (
          <Accordion
            type="single"
            collapsible
            className="space-y-2"
            key={item?.title}
            value={openItem}
            onValueChange={setOpenItem}
          >
            {/* <AccordionItem value={item.title} className="border-none ">
              <AccordionTrigger
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'group relative flex h-12 justify-between px-4 py-2 text-base duration-200 hover:bg-muted hover:no-underline',
                )}
              >
                <div>
                  <item.icon className={cn('h-5 w-5', item.color)} />
                </div>
                <div
                  className={cn(
                    'absolute left-12 text-base duration-200 ',
                    !isOpen && className,
                  )}
                >
                  {item.title}
                </div>

                {isOpen && (
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                )}
              </AccordionTrigger>
              <AccordionContent className="mt-2 space-y-4 pb-1">
                {item.children?.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'group relative flex h-12 justify-start gap-x-3',
                      path === child.href &&
                        'bg-muted font-bold hover:bg-muted',
                    )}
                  >
                    <child.icon className={cn('h-5 w-5', child.color)} />
                    <div
                      className={cn(
                        'absolute left-12 text-base duration-200',
                        !isOpen && className,
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        ) : (
          <Link
            key={item?.title}
            to={item?.href ?? ''}
            onClick={() => {
              if(setOpen) setOpen(false)
            }}
            className={cn(
              buttonVariants({ variant: 'ghost'}),
              'group relative flex h-12 justify-start',
              location.pathname === item?.href && 'bg-muted font-bold hover:bg-muted',
            )}
          >
            {item?.title}
          </Link>
        )
      )}
    </nav>
  );
}

export default Navbar;