function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-theme='dark']", "class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	screens: {
  		sm: '640px'
  	},
  	extend: {
  		textColor: {
  			skin: {
  				base: withOpacity("--color-text-base"),
  				accent: withOpacity("--color-accent"),
  				inverted: withOpacity("--color-fill")
  			}
  		},
  		backgroundColor: {
  			skin: {
  				fill: withOpacity("--color-fill"),
  				accent: withOpacity("--color-accent"),
  				inverted: withOpacity("--color-text-base"),
  				card: withOpacity("--color-card"),
  				'card-muted': withOpacity("--color-card-muted")
  			}
  		},
  		outlineColor: {
  			skin: {
  				fill: withOpacity("--color-accent")
  			}
  		},
  		borderColor: {
  			skin: {
  				line: withOpacity("--color-border"),
  				fill: withOpacity("--color-text-base"),
  				accent: withOpacity("--color-accent")
  			}
  		},
  		fill: {
  			skin: {
  				base: withOpacity("--color-text-base"),
  				accent: withOpacity("--color-accent")
  			},
  			transparent: 'transparent'
  		},
  		fontFamily: {
  			mono: ["IBM Plex Mono", "monospace"]
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					pre: {
  						color: false
  					},
  					code: {
  						color: false
  					}
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
